<template>
  <div class="layout default">
    <github-corner :href="repositoryHomepageUrl" />
    <nuxt />
  </div>
</template>

<script>
import GithubCorner from '~/components/GithubCorner'

export default {
  components: {
    GithubCorner,
  },
  data () {
    return {
      repositoryHomepageUrl: process.env.GITHUB_REPO_HOMEPAGE,
    }
  },
}
</script>
