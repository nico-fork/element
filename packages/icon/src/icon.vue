<template>
  <span :class="['e_ico-' + name,pic?'e_ico-pic-'+ pic : '']"><slot v-if="$slots"></slot></span>
</template>

<script>
  export default {
    name: 'TIcon',
    props: {
      name: String,
      pic: String
    },
    mounted () {
      console.log(this.$slots);
    }
  };
</script>
