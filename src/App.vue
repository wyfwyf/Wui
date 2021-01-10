<template>
  <layout-admin>
    <div>
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="8">
          <codemirror
            :ref="jsCodeOdb.ref"
            :value="jsCodeOdb.code"
            :options="jsCodeOdb.options"
          >
            <!--@ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"-->
          </codemirror>
        </el-col>
        <el-col :span="8">
          <codemirror
            :ref="htmlCodeOdb.ref"
            :value="htmlCodeOdb.code"
            :options="htmlCodeOdb.options"
          >
          </codemirror>
        </el-col>
        <el-col :span="8">
          <codemirror
            :ref="cssCodeOdb.ref"
            :value="cssCodeOdb.code"
            :options="cssCodeOdb.options"
          >
          </codemirror>
        </el-col>
      </el-row>

      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
        </el-col>
        <el-col :span="12">
          <div>
            <div class="box" :style="box.style">
              <div class="box-item"></div>
              <div class="box-item"></div>
              <div class="box-item"></div>
              <div class="box-item"></div>
              <div class="box-item"></div>
            </div>
          </div>
        </el-col>
      </el-row>

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
      // https://tool.tun6.com/code_mirror/commands/ 参考网站，站内代码嵌入
      // https://www.cnblogs.com/hellocd/p/10443237.html 布局参考网站
      jsCodeOdb: {
        ref: 'jsCode',
        code: 'const a = 10;\nalert(123);\n\n\n\n\n\n\n\n',
        options: {
          // codemirror options
          tabSize: 2,
          mode: 'text/javascript',
          theme: 'darcula',
          lineNumbers: true,
          line: true
          // more codemirror options, 更多 codemirror 的高级配置...
        }
      },
      htmlCodeOdb: {
        ref: 'htmlCode',
        code: '<div>\n' +
          '<div class="box">\n' +
          '        <div class="box-item"></div>\n' +
          '        <div class="box-item"></div>\n' +
          '        <div class="box-item"></div>\n' +
          '        <div class="box-item"></div>\n' +
          '        <div class="box-item"></div>\n' +
          '    </div>\n' +
          '</div>',
        options: {
          // codemirror options
          indentUnit: 2,
          tabSize: 2,
          smartIndent: true,  // 是否智能缩进
          electricChars: true,
          mode: 'htmlmixed',
          theme: 'darcula',
          lineNumbers: true,
          line: true
          // more codemirror options, 更多 codemirror 的高级配置...
        }
      },
      cssCodeOdb: {
        ref: 'jsCode',
        code: 'const a = 10;\nalert(123);\n\n\n\n\n\n\n\n',
        options: {
          // codemirror options
          tabSize: 2,
          mode: 'text/javascript',
          theme: 'darcula',
          lineNumbers: true,
          line: true
          // more codemirror options, 更多 codemirror 的高级配置...
        }
      },
      box: {
        style: {
          display: 'flex',
          'flex-direction': 'row',
          'flex-wrap': 'wrap',
          'justify-content': 'flex-start',
          'align-items': 'flex-start',
          'align-content': 'flex-start',
         }
      },

      'flex-direction': [
        'row', // 水平方向，居左
        'row-reverse', // 水平方向，居右
        'column', // 垂直方向，居左
        'column-reverse', // 垂直方向，居左
      ],
      'flex-wrap': [
        'nowrap', //不换行。
        'wrap', //换行，第一行在上方
        'wrap-reverse' //换行，第一行在下方
      ],
      'justify-content': [
        'flex-start', // 左对齐
        'flex-end', //右对齐
        'center', //居中
        'space-between', //两端对齐，项目之间的间隔都相等。
        'space-around', //每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
      ],
      'align-items': [
        'flex-start', //交叉轴的起点对齐。
        'flex-end', //交叉轴的终点对齐。
        'center', //交叉轴的中点对齐。
        'baseline',// 项目的第一行文字的基线对齐。
        'stretch' //如果项目未设置高度或设为auto，将占满整个容器的高度。
      ],
      'align-content': [
        'flex-start', //与交叉轴的起点对齐。
        'flex-end', //与交叉轴的终点对齐。
        'center', //与交叉轴的中点对齐。
        'space-between', //与交叉轴两端对齐，轴线之间的间隔平均分布。
        'space-around', //每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
        'stretch', //轴线占满整个交叉轴。
      ],
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
      return this.$refs.jsCode.codemirror
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>

<style scoped>
   .box { background: #faebd7; height: 700px}
   .box-item { background: #49baf1; height: 220px; width: 220px }
</style>

