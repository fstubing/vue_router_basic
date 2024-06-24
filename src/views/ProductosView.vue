<template>
  <div class="container">
    <Card
      :nombre="nombre"
      :descripcion="descripcion"
      :precio="precio"
      :cantidad="cantidad"
    />
  </div>
  <div class="container my-5">
    <router-link to="/" class="btn btn-secondary">Volver al inicio</router-link>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
  },
};
</script>
