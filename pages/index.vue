<template>
  <section>
    <h1 v-if="sharkAteCable">
      {{ $t('yes') }}
    </h1>
    <h1 v-else>
      {{ $t('no') }}
    </h1>
    <p v-if="sharkAteCable">
      {{ $t('situation_fuct') }}
    </p>
    <p v-else>
      {{ $t('situation_normal') }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      sharkAteCable: process.env.SHARK_ATE_CABLE,
    }
  },
}
</script>

<style lang="scss">
h1 {
  font-size: 10rem;
}
p {
  font-size: 2rem;
}
h1, p {
  text-align: center;
}
</style>
