<template>
  <div class="collapse-row-wrapper">
    <div class="news-title collapsed"
         :id="'collapse-'+propKey+'-button'"
         @click="toggleNewsTitle('collapse-'+propKey+'-button', 'collapse-'+propKey)">
      <p>lorem ipsum...</p>
      <b-icon font-scale="1.2" :id="'collapse-button-icon'+propKey" :icon="icon"/>
    </div>
    <b-collapse :id="'collapse-'+propKey">
      <b-card>
        <slot name="content"></slot>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import collapseMixin from '@/mixins/collapse-mixin'

export default {
  name: 'CollapseRow',
  props: {
    propKey: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data () {
    return {
      icon: 'chevron-down'
    }
  },
  components: {},
  mixins: [collapseMixin],
  methods: {
    toggleNewsTitle () {
      this.collapseSmooth(`collapse-${this.propKey}-button`, 'collapse-' + this.propKey)

      const icon = document.getElementById('collapse-button-icon' + this.propKey)
      if (!icon.classList.contains('rotate-180-r')) {
        icon.classList.add('rotate-180-r')
      } else {
        icon.classList.toggle('rotate-180-r')
      }
    }
  },
  created () {},
  mounted () {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (`collapse-${this.propKey}` === collapseId) {
        setTimeout(() => {
          this.icon = isJustShown ? 'chevron-up' : 'chevron-down'
        }, (isJustShown ? 150 : 350))
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .collapse {
    * {
      background-color: $white-color;
    }
  }

  .news-title {
    position: relative;
    @include box-shadow(0px 0px 13px -5px rgba(0, 0, 0, 0.83));
    background-color: $white-color;
    height: 40px;
    border-radius: 50px;

    @include transition(all 200ms linear);

    p {
      line-height: 40px;
    }

    svg {
      position: absolute;
      top: 10px;
      right: 12px;
    }

    &.not-collapsed {
      border-radius: unset;
      border-top-left-radius: 20px 20px;
      border-top-right-radius: 20px 20px;
    }
  }

  .collapse {
    @include transition(all 200ms linear);
    @include box-shadow(0px 5px 10px -7px rgba(0, 0, 0, 0.83));
    border-bottom-left-radius: 15px 15px;
    border-bottom-right-radius: 15px 15px;

    & .card {
      border-radius: unset;
      border-bottom-left-radius: 15px 15px;
      border-bottom-right-radius: 15px 15px;
      border: unset;
      border-top: 1px solid $secondary-color;

      & .card-body {
        border-bottom-left-radius: 15px 15px;
        border-bottom-right-radius: 15px 15px;
      }
    }
  }
</style>
