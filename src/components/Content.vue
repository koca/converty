<template>
  <main class="main w-full md:flex flex-1 md:max-w-2xl mx-auto px-4">
    <div class="editor flex flex-col flex-1 my-4 md:mr-2">
      <Pane class="mb-2" v-model="textInput">
        <template slot="title">Input</template>
        <template slot="footer">
          <span class="">Write <strong>@sep=#</strong> to the first line. <strong>#</strong> is your seperator. (default: space or comma)</span>
        </template>
      </Pane>
      <Pane class="mt-2" v-model="textFormat">
        <template slot="title">Format</template>
        <template slot="footer">
          The placeholders in the format string are marked by <strong>%s</strong>. (<strong class="text-xs">%1$s &middot; %2$s &middot; %3$s</strong>)
        </template>
      </Pane>
    </div>
    <div class="output flex flex-col flex-1 md:ml-2 rounded mt-auto md:my-4">
      <Pane readonly v-model="output">
        <template slot="title">Output</template>
      </Pane>
    </div>
  </main>
</template>

<script>
import Pane from "./Pane";

export default {
  components: {
    Pane
  },
  computed: {
    // vuex v-model
    textInput: {
      get() {
        return this.$store.getters.input;
      },
      set(val) {
        this.$store.commit("SET_INPUT", val);
      }
    },
    textFormat: {
      get() {
        return this.$store.getters.format;
      },
      set(val) {
        this.$store.commit("SET_FORMAT", val);
      }
    },
    output: {
      get() {
        return this.$store.getters.output;
      }
    }
  }
};
</script>
