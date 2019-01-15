<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title } = context.props
    const xNodes = []
    if (icon) {
      xNodes.push(<i class={icon}/>)
    }

    if (title) {
      xNodes.push(<span slot='title'>{(title)}</span>)
    }
    return xNodes
  }
}
</script>
