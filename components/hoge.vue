<template>
  <div class="hoge">
    hoge components Typescript Test
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';


@Component({
  /** filters */
  filters: {
    convertUpperCase(value: string): string | null {
      if (!value) {
        return null;
      }
      return value.toUpperCase();
    },
  },
})
export default class HelloVue extends Vue {
  /** props */
  @Prop() val!: string;

  /** data */
  value: string = this.val;
  inputValue: string = '';

  /** emit */
  @Emit('handle-click')
  clickButton(val: string): void {}

  /** watch */
  @Watch('value')
  onValueChange(newValue: string, oldValue: string): void {
    console.log(`watch: ${newValue}, ${oldValue}`);
  }

  /** computed */
  get isDisabled(): boolean {
    return this.inputValue === '';
  }

  /** lifecycle hook */
  mounted(): void {
    console.log('mounted');
  }

  /** methods */
  handleInput($event: Event): void {
    this.inputValue = (($event.target as any) as HTMLInputElement).value;
  }
  handleClick(): void {
    if (this.inputValue === '') {
      return;
    }
    this.value = this.inputValue;
    this.inputValue = '';
    this.clickButton(this.value);
  }
}
</script>
