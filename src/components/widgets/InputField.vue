<template>
  <div class="row justify-content-center mb-16">
    <div class="col-auto d-flex justify-content-end">
      <label :for="name" class="col-form-label">{{ label }}：</label>
    </div>
    <div class="col-8 col-lg-6">
      <input
        v-model="value"
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :class="{ 'is-invalid': errorMessage }"
      />
      <div class="invalid-feedback">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
});

const { value, errorMessage } = useField(() => props.name);
</script>