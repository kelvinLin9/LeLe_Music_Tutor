<template>
  <div class="row justify-content-center mb-16">
    <div class="col-auto d-flex justify-content-end">
      <label :for="name" class="col-form-label">
        {{ label }}：
      </label>
    </div>
    <div class="col-8 col-lg-6">
      <VField
        :name="name"
        :id="name"
        as="select"
        :rules="rules"
        class="form-select"
        :class="{ 'is-invalid': errors[name] }"
        v-model="selectValue"
      >
        <option value="" selected>請選擇{{ label }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </VField>
      <ErrorMessage :name="name" class="invalid-feedback" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ErrorMessage, Field as VField } from 'vee-validate';

const props = defineProps({
  label: String,
  name: String,
  rules: Object,
  options: Array,
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const selectValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>