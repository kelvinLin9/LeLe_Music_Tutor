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
        :type="type"
        :rules="rules"
        class="form-control"
        :class="{ 'is-invalid': errors[name] }"
        :placeholder="placeholder"
        v-model="inputValue"
      />
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
  type: {
    type: String,
    default: 'text'
  },
  rules: Object,
  placeholder: String,
  modelValue: [String, Number]
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>