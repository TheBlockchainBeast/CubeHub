<template>
  <div>
    <!-- <small v-if="labelOutside" for="">{{ labelOutside }}</small> -->
    <v-text-field
      @input="$emit('input', $event)"
      class="mb-4"
      :label="labelInside"
      outlined
      rounded
      height="40px"
      v-bind="$attrs"
      :type="inputType"
      :value="value"
      hide-details="auto"
    >
      <template v-if=" type == 'password'" v-slot:append>
        <v-icon
          @click="inputType = inputType == 'password' ? 'text' : 'password'"
          color="#fff"
        >
          {{ inputType == "password" ? "mdi-eye" : "mdi-eye-off" }}
        </v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  data: () => ({
    passwordIcon: "mdi-eye-off",
    show: false,
    yyy: "",
    inputType: "",
    PasswordType: "password",
  }),
  props: {
    type: {
      type: String,
      default: "text",
    },
    labelInside: {
      type: String,
    },
    labelOutside: {
      type: String,
    },
    password: {
      type: Boolean,
    },
    value: {
      type: [String, Number],
      required: false,
      default: "",
    },
  },
  computed: {
    type2() {
      if (this.password) {
        return this.PasswordType;
      } else {
        return this.type;
      }
    },
  },
  mounted() {
    this.inputType = this.type;
  },
  methods: {
    visibleController() {
      if (this.show == false) {
        this.passwordIcon = "mdi-eye";
        this.PasswordType = "text";
        this.show = true;
      } else {
        this.passwordIcon = "mdi-eye-off";
        this.PasswordType = "password";
        this.show = false;
      }
    },
  },
};
</script>

<style lang="scss">

</style>
