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
      <a href="https://tuoitrenews.vn/news/society/20200519/internet-speed-in-vietnam-stutters-as-submarine-cable-breaks-down-again/54654.html" target="_blank">
        {{ $t('again') }}
      </a>
    </p>
    <p v-else>
      {{ $t('situation_normal') }}
    </p>

    <add-this-widget />
  </section>
</template>

<script>
import AddThisWidget from '~/components/AddThisWidget'

export default {
  components: {
    AddThisWidget,
  },
  data () {
    return {
      sharkAteCable: process.env.SHARK_ATE_CABLE,
    }
  },
  head () {
    return {
      title: this.$t('site_title'),
    }
  },
}
</script>
