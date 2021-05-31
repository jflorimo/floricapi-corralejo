<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CAlert color="danger" closeButton v-show="login_error">
                    Unable to log in with provided credentials.
                  </CAlert>
                  <CInput v-model="input_email"
                    placeholder="Email"
                    autocomplete="email"
                    aria-label="Email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput v-model="input_password"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="doLogin">
                        Login <SpinnerButton :show="spinner_display"/>
                      </CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <img src="@/assets/icons/logo-flocapi-white.png" width="300"/>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  @click="goToRegister"
                >
                  Sign up !
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import SpinnerButton from "@/components/SpinnerButton/SpinnerButton";

export default {
  name: "Login",
  components: {SpinnerButton},
  data() {
    return {
      input_email: "",
      input_password: "",
      login_error: false,
      spinner_display: false
    }
  },
  methods: {
    ...mapActions({
      login: "accounts/login",
    }),
    goToRegister(){this.$router.push("/register")},
    doLogin(){
      if (!this.input_email || !this.input_password)
        return
      this.login_error = false
      this.spinner_display = true
      let payload = {"email": this.input_email, "password": this.input_password}
      this.login(payload).then(() => {
        this.$router.push('/')
      }).catch(() => {
        this.login_error = true
        this.spinner_display = false
      })

    }
  }
}
</script>
