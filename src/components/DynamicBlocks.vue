<template>
  <div class="blocks-list">
    <h3>{{ name }}</h3>
    <div class="main-wrap">
      <form @submit.prevent="formSubmit">
        <div
          class="single-block"
          v-for="(block, index) in blocks"
          :key="`block-${index}`"
        >
          <div v-if="block.type == 'text'">
            <div class="single-wrapper">
              <p>
                <label :for="block.token">{{ block.props.title }}</label>
              </p>
              <input
                v-model="formData[block.token]"
                :id="block.token"
                :placeholder="block.props.placeholder"
                :required="!!block.props.required || false"
              />
            </div>
          </div>

          <div v-if="block.type == 'checkbox'">
            <div class="single-wrapper">
              <input
                v-model="formData[block.token]"
                :id="block.token"
                :placeholder="block.props.placeholder"
                type="checkbox"
                :required="!!block.props?.required || false"
              />
              <label :for="block.token">{{ block.props.title }}</label>
            </div>
          </div>

          <div v-if="block.type == 'date'">
            <div
              class="single-wrapper"
              v-if="
                typeof block.props.required == 'boolean'
                  ? !!block.props.required || false
                  : formData[block.props.required]
              "
            >
              <p>
                <label :for="block.token">
                  {{ block.props.title }}
                </label>
              </p>
              <input
                v-model="formData[block.token]"
                :id="block.token"
                :placeholder="block.props.placeholder"
                type="date"
                :required="!!block.props.required || false"
              />
            </div>
          </div>
        </div>
        <div class="submit-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div v-if="submittedDatas.length" class="data-list">
        <h2>Submitted Datas</h2>
        <ul>
          <li
            class="single-form"
            v-for="(data, index) in submittedDatas"
            :key="`data-${index}`"
          >
            <div
              class="form-element"
              v-for="(value, key) in data"
              :key="`data-${index}-${key}`"
            >
              {{ key.replaceAll("_", " ") }} : <label> {{ value }}</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Dynamic Form Blocks",
      formData: {},
      submittedDatas: [],
      blocks: [
        {
          token: "Person_Name",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. Jhon Doe",
          },
        },
        {
          token: "Is_Person_Minor",
          type: "checkbox",
          props: {
            title: "Is this current person minor",
            default: false,
          },
        },
        {
          token: "Person_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: "Is_Person_Minor",
            placeholder: "e.g. 01/01/2000",
          },
        },
      ],
    };
  },
  methods: {
    formSubmit() {
      this.submittedDatas.push(JSON.parse(JSON.stringify(this.formData)));
      this.formData = {};
    },
  },
};
</script>

<style>
.main-wrap {
  padding-left: 2%;
}
.form-element {
  margin-bottom: 1%;
}
.single-form {
  margin-bottom: 2%;
  margin-left: 2%;
}
.data-list {
  margin-top: 4%;
}
.blocks-list {
  margin: 4% 0;
}
.single-block {
  margin-bottom: 2%;
}
.submit-wrapper {
  margin-top: 4%;
}
.blocks-list * {
  font-size: 20px;
}
</style>
