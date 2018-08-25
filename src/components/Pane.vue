<template>
  <div class="pane h-full w-full flex flex-col rounded shadow bg-white">
    <h3 class="pane__title px-4 font-medium tracking-wide text-lg my-3"><slot name="title"/></h3>
    <hr class="border border-grey-light w-full m-0">
    <textarea :value="text" @input="handleInput" :readonly="readonly" class="pane__text overflow-auto w-full h-32 md:h-full bg-transparent p-4 focus:outline-none"></textarea>
    <hr v-if="$slots.footer" class="border border-grey-light w-full m-0">
    <div v-if="$slots.footer" class="pane__footer py-2 px-4 text-sm">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    readonly: {
      default: false,
      type: Boolean
    },
    value: {
      default: ""
    }
  },
  data() {
    return {
      text: ""
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        this.text = newVal;
      }
    }
  },
  methods: {
    handleInput(e) {
      this.text = e.target.value;
      this.$emit("input", this.text);
    }
  }
};
</script>

<style>
</style>
