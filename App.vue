<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Navigation></Navigation>
    <FlashCard />
    <employee-form @add:employee="addEmployee" />
    <employee-table :employees="employees" 
                    @delete:employee="deleteEmployee"
                    @edit:employee="editEmployee" />
    <!-- <LAData></LAData> -->
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import FlashCard from './components/Flashcard'
import EmployeeTable from './components/EmployeeTable'
import EmployeeForm from './components/EmployeeForm'
// import LAData from './components/LAData'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'FlashCard' : FlashCard,
    'EmployeeTable' : EmployeeTable,
    'EmployeeForm' : EmployeeForm,
    // 'LAData' : LAData
  },

  data() {
    return {
      employees: []
    }
  },

  methods: {
    addEmployee(employee) {
      const lastId = this.employees.length > 0 ? this.employees[this.employees.length -1].id : 0;
      const id = lastId + 1;
      const newEmployee = { ...employee, id };
      this.employees = [...this.employees, newEmployee];
    },

    deleteEmployee(id) {
      this.employees = this.employees.filter(employee => employee.id !== id)
    },

    editEmployee(id, updatedEmployee) {
      this.employees = this.employees.map(employee => employee.id === id ? updatedEmployee : employee)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
