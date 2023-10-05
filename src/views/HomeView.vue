<template>
  <div class="container">
    <div class="m-5 btn btn-primary"
      @click="set()">
      新增
    </div>
    <div class="m-5 btn btn-primary"
      @click="edit()">
      編輯..
    </div>
    <div class="m-5 btn btn-primary"
      @click="deleteP()">
      刪除
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapWritableState } from 'pinia' 

  
  import { doc, setDoc, Timestamp, getFirestore, updateDoc} from "firebase/firestore"
  const db = getFirestore()
  export default {
    data () {
      return {
        loading: true,
      }
    },
    methods: {
      async set() {
        console.log(123)
        await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
        });
      },
      async edit() {
        const washingtonRef = doc(db, "cities", "LA");
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
          capital: true
        });
      },


    },
    created () {

    }
  }
</script>
