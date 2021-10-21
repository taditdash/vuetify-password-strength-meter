<template>
  <div>
    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      label="Password"
      class="mb-6"
      @click:append="showPassword = !showPassword"
    >
    </v-text-field>
    <v-progress-linear
      :color="score.color"
      :value="score.value"
    ></v-progress-linear>
    <v-card
      outlined
      v-if="
        score.warning || (score.suggestions && score.suggestions.length > 0)
      "
    >
      <v-card-text>
        <v-row v-if="score.suggestions && score.suggestions.length > 0">
          <v-col cols="12" md="1" class="text-center">
            <v-icon>mdi-lightbulb-on-outline</v-icon>
          </v-col>
          <v-col class="text-left">
            <div v-for="(item, index) in score.suggestions" :key="index">
              {{ item }}
            </div>
          </v-col>
        </v-row>
        <div v-if="score.warning">
          <v-divider></v-divider>
          <v-row v-if="score.warning">
            <v-col cols="12" md="1" class="text-center">
              <v-icon>mdi-alert-outline</v-icon>
            </v-col>
            <v-col class="text-left">
              <div>{{ score.warning }}</div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import zxcvbn from "zxcvbn";

export default {
  name: "PasswordWithMeter",
  data() {
    return {
      showPassword: false,
      password: "",
      // rules: {
      //   required: value => !!value || 'Enter a password',
      //   min: v => v.length >= 8 || 'Use 8 characters or more for your password',
      //   // strength: v => zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.',
      // },
    };
  },

  computed: {
    score() {
      const result = zxcvbn(this.password);

      switch (result.score) {
        case 4:
          return {
            color: "green",
            value: 100,
            suggestions: result.feedback.suggestions,
            warning: result.feedback.warning,
          };
        case 3:
          return {
            color: "yellow",
            value: 75,
            suggestion: result.feedback.suggestions,
            suggestions: result.feedback.warning,
          };
        case 2:
          return {
            color: "orange",
            value: 50,
            suggestions: result.feedback.suggestions,
            warning: result.feedback.warning,
          };
        case 1:
          return {
            color: "red",
            value: 25,
            suggestions: result.feedback.suggestions,
            warning: result.feedback.warning,
          };
        default:
          return {
            color: "red",
            value: 0,
            suggestions: result.feedback.suggestions,
            warning: result.feedback.warning,
          };
      }
    },
  },
};
</script>