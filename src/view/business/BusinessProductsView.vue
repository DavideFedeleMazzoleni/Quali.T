<script setup>
import '../../assets/css/business/products.css'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({name:'',category:'',price:'',quantity:'',allergens:''})
const feedback = ref('')
const imported = ref([])
function readProducts(){ try{return JSON.parse(localStorage.getItem('qualit-products')||'[]')}catch{return []} }
function saveProducts(items){localStorage.setItem('qualit-products',JSON.stringify(items))}
function addProduct(){
  const items=readProducts()
  items.push({id:Date.now(),...form,price:Number(form.price),quantity:Number(form.quantity||0),tags:[form.category,...form.name.toLowerCase().split(' ').filter(x=>x.length>4)],published:true})
  saveProducts(items); feedback.value=`Prodotto “${form.name}” aggiunto al catalogo.`; Object.assign(form,{name:'',category:'',price:'',quantity:'',allergens:''})
}
function parseCSV(text){
 const lines=text.replace(/^\uFEFF/,'').trim().split(/\r?\n/)
 const headers=lines.shift().split(/[;,]/).map(x=>x.trim().toLowerCase())
 return lines.filter(Boolean).map(line=>{const values=line.split(/[;,]/);return Object.fromEntries(headers.map((h,i)=>[h,values[i]?.trim()||'']))})
}
async function importFile(event){
 const file=event.target.files?.[0]; if(!file)return
 try{
  const raw=await file.text()
  const rows=file.name.toLowerCase().endsWith('.json')?JSON.parse(raw):parseCSV(raw)
  if(!Array.isArray(rows)) throw new Error('Il JSON deve contenere una lista di prodotti.')
  imported.value=rows.map((p,i)=>({name:p.name||p.nome||'',category:p.category||p.categoria||'Da classificare',price:Number(p.price??p.prezzo),quantity:Number(p.quantity??p.quantita??p.stock??0),allergens:p.allergens||p.allergeni||'',tags:[],published:true,_row:i+1}))
  const invalid=imported.value.filter(p=>!p.name||!Number.isFinite(p.price)||p.price<0)
  if(invalid.length) feedback.value=`Anteprima: ${invalid.length} record da correggere (nome e prezzo obbligatori).`
  else feedback.value=`Anteprima valida: ${imported.value.length} prodotti.`
 }catch(e){feedback.value=`Importazione non valida: ${e.message}`}
}
function confirmImport(){
 const good=imported.value.filter(p=>p.name&&Number.isFinite(p.price)&&p.price>=0).map(p=>({...p,id:Date.now()+p._row,tags:[p.category,...p.name.toLowerCase().split(' ').filter(x=>x.length>4)]}))
 const all=readProducts().concat(good); saveProducts(all); feedback.value=`Importati ${good.length} prodotti. I tag sono stati proposti automaticamente.`; imported.value=[]
}
</script>
<template>
<main class="page-shell"><header class="page-heading"><div><h1>Inserisci i tuoi prodotti.</h1><p>Inserimento manuale guidato oppure importazione massiva CSV/JSON con controllo dei campi.</p></div></header>
<div class="panel-grid">
<section class="panel"><h2>Inserimento manuale</h2><form @submit.prevent="addProduct" class="form-grid">
<div class="field full"><label for="name">Nome prodotto *</label><input id="name" v-model="form.name" required></div>
<div class="field"><label for="category">Categoria</label><input id="category" v-model="form.category" placeholder="Ortofrutta"></div>
<div class="field"><label for="price">Prezzo (€) *</label><input id="price" type="number" min="0" step=".01" v-model="form.price" required></div>
<div class="field"><label for="quantity">Disponibilità</label><input id="quantity" type="number" min="0" v-model="form.quantity"></div>
<div class="field"><label for="allergens">Allergeni</label><input id="allergens" v-model="form.allergens"></div>
<div class="field full"><button>Aggiungi al catalogo</button></div></form></section>
<section class="panel"><h2>Importazione CSV / JSON</h2><p>Campi riconosciuti: nome, categoria, prezzo, quantità, allergeni. I record incompleti restano da correggere prima dell'inserimento.</p>
<div class="field"><label for="file">File catalogo</label><input id="file" type="file" accept=".csv,.json,text/csv,application/json" @change="importFile"></div>
<div v-if="imported.length" class="table-wrap import-preview"><table class="data-table"><thead><tr><th>Prodotto</th><th>Categoria</th><th>Prezzo</th><th>Quantità</th></tr></thead><tbody><tr v-for="p in imported" :key="p._row"><td>{{ p.name||'Da correggere' }}</td><td>{{ p.category }}</td><td>{{ p.price }}</td><td>{{ p.quantity }}</td></tr></tbody></table></div>
<div class="actions"><button v-if="imported.length" @click="confirmImport">Conferma importazione</button><button class="button-secondary" @click="router.push('/business/catalogo')">Vai al catalogo</button></div>
</section></div><p v-if="feedback" class="feedback" role="status">{{ feedback }}</p></main>
</template>
