<template>
  <layout-admin>
    <div>
      console.log()
      <codemirror
        ref="myCm"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"

      >
        @input="onCmCodeChange"
      </codemirror>
    </div>
  </layout-admin>
</template>

<script>
import LayoutAdmin from '@/components/layout/admin'

export default {
  name: 'App',
  components: {
    LayoutAdmin
    // codemirror
  },
  data () {
    return {
      code: 'const a = 10',
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'darcula',
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>
