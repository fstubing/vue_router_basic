<template>
  <Card
    :nombre="nombre"
    :descripcion="descripcion"
    :precio="precio"
    :cantidad="cantidad"
  />
</template>

<script>
// @ is an alias to /src
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
