<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card class="header" flat>
          <v-card-title>
            <h2>My Account</h2>
          </v-card-title>
        </v-card>
        <v-container pl-3 pr-3>
          <v-card flat>
            <v-card-title>
              <v-dialog 
                v-model="dialog" 
                max-width="500px"
                content-class="overflow_visible"
                persistent
                scrollable
              >
                <v-btn 
                  slot="activator" 
                  color="primary" 
                  dark 
                  class="mb-2">
                  Create New Entry
                  <v-icon right dark>add</v-icon>
                </v-btn>
                <v-card style="height: 500px;">
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm12 md12>
                          <v-text-field 
                            v-model="editedItem.name" 
                            label="Name"
                          ></v-text-field>
                          </v-flex>
                            <v-flex xs12>
                            <v-menu
                              ref="menu"
                              :close-on-content-click="false"
                              v-model="menu"
                              :nudge-right="40"
                              :return-value.sync="date"
                              lazy
                              transition="scale-transition"
                              offset-y
                              full-width
                              min-width="290px"
                              >
                              <v-text-field
                                slot="activator"
                                v-model="editedItem.duedate"
                                label="Due Date"
                                readonly
                              ></v-text-field>
                              <v-date-picker v-model="editedItem.duedate" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                              </v-date-picker>
                            </v-menu>
                          </v-flex>
                          <v-flex xs12 sm12 md12>
                          <v-text-field 
                            v-model="editedItem.amount" 
                            label="Amount"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field 
                            v-model="editedItem.reported" 
                            label="Reported"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field 
                            v-model="editedItem.balance" 
                            label="Balance"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field 
                            v-model="editedItem.file" 
                            label="Balance"
                            style="display: none;"
                          ></v-text-field>
                          <center><img
                            width="200"
                            v-show="editedItem.file"
                            :src="editedItem.file"
                            alt=""
                          ></center>
                          <v-btn v-if="editedItem.file" dark color="red" block @click="removePhoto()">Remove Attached File</v-btn>
                          <v-btn v-else block @click="uploadPhoto">Attach Scan Copy</v-btn>
                          <upload-btn :fileChangedCallback="loadPhoto" style="display:none"></upload-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="items"
              :loading="loading"
              :search="search"
            >
              <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.duedate }}</td>
                <td class="text-xs-left">{{ props.item.amount }}</td>
                <td class="text-xs-left">{{ props.item.reported }}</td>
                <td class="text-xs-left">{{ props.item.balance }}</td>
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0" @click="editItem(props.item)">
                    <v-icon color="teal">edit</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </v-card>
        </v-container>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #fff;
  margin: 0px -23px 20px -23px;
  padding: 0px 20px 0 20px;
  width: 100%;
}
h2.header {
  background: #fff;
  margin: -23px -23px 20px -23px;
  padding: 20px;
}
.content--wrap .container {
  background: #f5f5f5;
}
.content-container {
  padding: 20px;
  background: #fff;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
  import axios from 'axios'
  import {uuid} from 'vue-uuid'
  import UploadButton from 'vuetify-upload-button'
  export default {
    data () {
      return {
        menu: '',
        date: false,
        session: [],
        dialog: false,
        loading: false,
        search: '',
        items: [],
        editedIndex: -1,
        editedItem: [],
        defaultItem: [],
        headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Due Date', value: 'duedate' },
          { text: 'Amount', value: 'amount' },
          { text: 'reported', value: 'reported' },
          { text: 'balance', value: 'balance' },
          { text: 'Actions', value: 'name', sortable: false }
        ],
        loadPhoto: function (val) {
          var reader = new FileReader()
          var d = this
          reader.onload = function (event) {
            d.$parent.$parent.$parent.$parent.editedItem.file = event.target.result
          }
          reader.readAsDataURL(val)
          d.$parent.$parent.$parent.$parent.photoIsLoaded = true
        }
      }
    },
    created () {
      var d = this
      this.session = JSON.parse(window.localStorage.getItem('session'))
      axios.defaults.headers.common['Authorization'] = `bearer ${this.session.api_key}`
      axios.get(window.apiLink + 'accounts', {
        params: {
          user_id: d.session.id
        }
      }).then(function (response) {
        // localStorage.setItem('session', JSON.stringify(response.data))
        // d.$emit('setRoleName', response.data)
        var items = []
        for (var x = 0; x < response.data.result.length; x++) {
          items.push({
            id: response.data.result[x].id,
            name: response.data.result[x].name,
            user_id: response.data.result[x].user_id,
            duedate: response.data.result[x].due_date,
            amount: response.data.result[x].amount,
            reported: response.data.result[x].reported,
            balance: response.data.result[x].balance,
            file: response.data.result[x].file
          })
        }
        d.loading = false
        d.items = items
      }).catch(function (error) {
        console.log(error)
        if (error.response !== undefined && error.response.status === 422) {
          d.error = true
          d.errorMessage = error.response.data.username
        } else {
          d.$emit('receiveAlertMessage', {
            body: error.response.statusText,
            type: 'error',
            id: uuid.v4()
          })
        }
        d.loading = false
      })
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Entry' : 'Edit Entry'
      }
    },
    watch: {
    },
    methods: {
      removePhoto (item) {
        this.editedItem.file = ''
      },

      uploadPhoto () {
        document.getElementById('uploadFile').click()
      },

      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        // const index = this.items.indexOf(item)
        // var d = this
        this.$store.dispatch('confirmer/ask', {
          title: 'Confirm Delete',
          body: 'Are you sure you want to delete this item?'
        }).then(confirmation => {
          if (confirmation) {
          }
        })
      },

      close () {
        this.dialog = false
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      },

      save () {
        var data = new FormData()
        var d = this
        data.append('file', document.getElementById('uploadFile').files[0])
        var O = Object
        if (this.editedIndex > -1) {
          console.log('edit')
          axios.post(`${window.apiLink}accounts/${d.editedItem.id}`, {
            name: d.editedItem.name,
            due_date: d.editedItem.duedate,
            reported: d.editedItem.reported,
            amount: d.editedItem.amount,
            balance: d.editedItem.balance,
            file: d.editedItem.file
          }).then(function (res) {
            O.assign(d.items[d.editedIndex], d.editedItem)
            d.$emit('receiveAlertMessage', {
              body: 'User has been successfully save.',
              type: 'success',
              id: uuid.v4()
            })
            d.close()
            // if (d.photoIsLoaded === true) {
            //   axios.post(
            //     `${window.apiLink}accounts/upload/${d.editedItem.id}`,
            //     data
            //   ).then(function (res2) {
            //   }).catch(function (error2) {
            //     console.log('error: ', error2)
            //   })
            //   d.photoIsLoaded = false
            // }
          }).catch(function (error) {
            console.log('error: ', error)
          })
        } else {
          axios.post(`${window.apiLink}accounts/`, {
            name: d.editedItem.name,
            user_id: d.session.id,
            due_date: d.editedItem.duedate,
            reported: d.editedItem.reported,
            amount: d.editedItem.amount,
            balance: d.editedItem.balance,
            file: d.editedItem.file
          }).then(function (res) {
            // console.log('editedItem: ', d.editedItem)
            d.editedItem.id = res.data.last_insert_id
            console.log(d.items)
            // console.log('items: ', d.items)
            d.$emit('receiveAlertMessage', {
              body: 'User has been successfully save.',
              type: 'success',
              id: uuid.v4()
            })
            d.close()
            // if (d.photoIsLoaded === true) {
            //   axios.post(
            //     `${window.apiLink}accounts/upload/${res.data.last_insert_id}`,
            //     data
            //   ).then(function (res2) {
            //   }).catch(function (error2) {
            //     console.log('error: ', error2)
            //   })
            //   d.photoIsLoaded = false
            // }
          }).catch(function (error) {
            console.log('error: ', error)
          })
        }
      }
    },
    components: {
      'upload-btn': UploadButton
    }
  }
</script>
