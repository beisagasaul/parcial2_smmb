<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const titulo = ref('')
const sinopsis = ref('')
const director = ref('')
const temporada = ref('')
const fechaEsteno = ref('')

async function crearSerie() {
  await http
    .post(ENDPOINT, {
      titulo: titulo.value,
      sinopsis: sinopsis.value,
      director: director.value,
      temporada: temporada.value,
      fechaEsteno: fechaEsteno.value
    })
    .then(() => router.push('/series'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/series">Series</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Serie</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearSerie">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="titulo" placeholder="Titulo" required />
          <label for="titulo">Titulo</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="sinopsis"
            placeholder="Sinopsis"
            required
          />
          <label for="sinopsis">Sinopsis</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="director"
            placeholder="Director"
            required
          />
          <label for="director">Director</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="temporada"
            placeholder="Temporada"
            required
          />
          <label for="temporada">Temporada</label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="fechaEsteno"
            placeholder="FechaEstreno"
            required
          />
          <label for="fechaEstreno">Fecha de Estreno</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" title="Guardar" />
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
