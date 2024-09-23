<template>
  <div class="row justify-content-center mb-16">
    <div class="col-auto d-flex justify-content-end">
      {{ label }}：
    </div>
    <div class="col-8 col-lg-6">
      <div v-for="option in options" :key="option.value" class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          :id="option.value"
          :value="option.value"
          v-model="checkboxValue"
        >
        <label class="form-check-label" :for="option.value">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
  options: Array,
  modelValue: Array
});

const emit = defineEmits(['update:modelValue']);

const checkboxValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>