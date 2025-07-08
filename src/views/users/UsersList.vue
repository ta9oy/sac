<template>
  <CCard class="mb-4">
    <CCardHeader>
      <!-- <strong>User List</strong> -->
      <CButton class="ms-auto d-flex justify-content-end" color="primary" @click="addNewUser">Add User</CButton>
    </CCardHeader>
    <CCardBody>
      <div style="margin-top: 1rem !important">
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell v-for="field in fieldsForUsers" :key="field.key" :class="field._props?.class">{{
                field.label }}</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow v-for="(user, index) in userList" :key="user.id">
              <CTableDataCell>{{ (currentPage - 1) * perPage + index + 1 }}</CTableDataCell>
              <CTableDataCell>{{ user.userName }}</CTableDataCell>
              <CTableDataCell>{{ user.phoneNumber }}</CTableDataCell>
              <CTableDataCell>{{ user.role }}</CTableDataCell>
              <CTableDataCell>{{ user.status }}</CTableDataCell>
              <CTableDataCell class="d-flex justify-content-center">
                <CButton color="primary" variant="outline" size="sm" style="--cui-btn-padding-x: 1.5rem"
                  @click="viewUserDetails(user.id)">Edit</CButton> &nbsp;
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <CPagination aria-label="Page navigation example">
          <CPaginationItem @click="currentPage = 1" :disabled="currentPage === 1">First</CPaginationItem>
          <CPaginationItem @click="currentPage -= 1" :disabled="currentPage === 1">Previous</CPaginationItem>

          <CPaginationItem v-for="page in Math.ceil(totalRows / perPage)" :key="page" :active="currentPage === page"
            @click="currentPage = page">
            {{ page }}
          </CPaginationItem>

          <CPaginationItem @click="currentPage += 1" :disabled="currentPage === Math.ceil(totalRows / perPage)">Next
          </CPaginationItem>
          <CPaginationItem @click="currentPage = Math.ceil(totalRows / perPage)"
            :disabled="currentPage === Math.ceil(totalRows / perPage)">Last</CPaginationItem>
        </CPagination>
      </div>
      <!-- <div v-if="loading" class="text-center">
        <CSpinner color="primary" />
      </div>
      <div v-else-if="error" class="text-danger text-center">
        {{ error }}
      </div>
      <div v-else>
        <UserTable :userList="userList" :fieldsForUsers="fieldsForUsers" />
      </div> -->
    </CCardBody>
  </CCard>
  <div>
  </div>

</template>

<script>
// import { CCard } from '@coreui/vue';
import { UserServices } from '../../services'
export default {
  name: 'UserList',
  data() {
    return {
      fieldsForUsers: [
        { key: 'index', label: 'SL', sortable: true },
        { key: 'userName', label: 'User Name', sortable: true },
        { key: 'phoneNumber', label: 'Phone Number', sortable: true },
        { key: 'role', label: 'Role', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'actions', label: 'Actions', _props: { class: 'text-center' } },
      ],
      filterOn: ['userName', 'phoneNumber', 'role', 'status'],
      submitted: false,
      userList: [],
      loading: true,
      error: '',
      currentPage: 1,
      perPage: 5, // Number of items per page
      totalRows: 0,
    }
  },
  watch: {
    currentPage: {
      handler: function () {
        this.handleSearch(); // Fetch data when currentPage changes
      },
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalRows / this.perPage);
    }
  },
  mounted() {
    this.handleSearch();
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      // Add slight delay if needed
      setTimeout(this.handleSearch, 100);
    },
    addNewUser() {
      console.log(this.$router);
      this.$router.push({ name: 'Add User' });
    },
    viewUserDetails(userId) {
      this.$router.push({ name: 'Users', params: { id: userId } });
    },
    handleSearch() {
      // Reset states
      this.submitted = false
      this.error = ''
      const params = {
        page: (this.currentPage - 1),
        size: this.perPage,
      }

      new UserServices().getUser(params)
        .then(response => {
          console.log('User List Response:', response.content)

          response.content.forEach(user => {
            user.index = this.userList.length + 1
          })
          this.userList = response.content || []
          this.totalRows = response.totalElements || 0
          this.loading = false
        })
        .catch(error => {
          this.error = error.message || 'An error occurred while fetching user data.'
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.bg-light {
  background-color: #f8f9fa !important;
}
</style>
