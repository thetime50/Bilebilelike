<template>
<div class="component-slot-class-test">
    <p>this is slot-class-test component</p>
  <SCTComponent>
    <template v-slot:default="props">
        <div>
          <p>
              hi this is slot
          </p>
          <p>
            {{JSON.stringify(props)}}
          </p>
</div>
    </template>
  </SCTComponent>
</div>
</template>

<script>
import SCTComponent from "@/components/SlotClassTest/SCTComponent.vue";
export default {
  name: "slot-class-test",
  components: {
      SCTComponent,
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.slot-class-test{
    // 
}
</style>