<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>

      <CRow class="justify-content-center">
          <img
              src="@/assets/icons/logo-flocapi-black.png"
              width="300"
          />
      </CRow>
      <CRow class="justify-content-center">

        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm v-on:submit.prevent="register">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput v-model="input_email"
                        type="Email"
                        aria-label="Email"
                        placeholder="Email"
                        autocomplete="email"
                        prepend="@"
                        :description="emailDescription"
                        :isValid="emailIsValid"
                />
                <CInput v-model="input_password"
                        placeholder="Password"
                        :type="passwordFieldType"
                        autocomplete="new-password"
                        description="Password should contain at least one number, with minimum length of 8 characters"
                        :isValid="passwordIsValid"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  <template #append-content>
                    <FontAwesomeIcon :icon="['fa', visibilityIcon]" @click="switchVisibility()" fixedWidth=""/>
                  </template>
                </CInput>

                <CButton type="submit" :color="submitColor" block>Create Account</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'


export default {
  name: "Register",
  data () {
    return {
      input_email: "",
      input_password: "",
      submitColor: "success",
      passwordFieldType: "password",
      visibilityIcon: "eye-slash",
      emailDescription: "",
    }
  },
  computed: {
    ...mapState("register", ["userId", "email", "register_errored", "email_already_exists"]),
    ...mapState("login", ["login_errored"])

  },
  methods: {
    ...mapMutations("register", ["set_email_already_exists"]),
    register: function () {
      if (this.input_email && this.input_password)
      {
        let payload = {"email": this.input_email, "password": this.input_password}
        this.$store.dispatch("register/register", payload).then(() => {
          if (this.email_already_exists) {
            this.emailDescription = "An account with this email address already exists."
          }
          else if (this.userId && this.email) {
            // TODO get token
            this.$store.dispatch("login/login", payload).then(() => {
              if (!this.login_errored) {
                // this.$router.push('/');
              }
            })
          }
        })
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      this.visibilityIcon = this.visibilityIcon === "eye" ? "eye-slash" : "eye";
    },
    passwordIsValid: function(pwd) {
      if (!pwd)
        return null
      const regex = /^(?=.*\d).{8,}$/;
      return regex.exec(pwd) !== null
    },
    emailIsValid: function (){
      if (this.email_already_exists) {
        this.set_email_already_exists(false)
        this.emailDescription = ""
        return false
      }
      else
        return null
    }
  }
}
</script>
