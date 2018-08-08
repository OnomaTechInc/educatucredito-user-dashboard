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
                        <v-flex xs12 sm12 md12>
                          <v-text-field 
                            v-model="editedItem.dutedate" 
                            label="Due Date"
                          ></v-text-field>
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
                <td class="text-xs-left">{{ props.item.email }}</td>
                <td class="text-xs-left">{{ props.item.studio }}</td>
                <td class="text-xs-left">{{ props.item.role }}</td>
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
  // import axios from 'axios'
  // import {uuid} from 'vue-uuid'
  export default {
    data () {
      return {
        dialog: false,
        loading: true,
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
        ]
      }
    },
    created () {
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Entry' : 'Edit Entry'
      }
    },
    watch: {
    },
    methods: {
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
      }
    },
    components: {
    }
  }
</script>
