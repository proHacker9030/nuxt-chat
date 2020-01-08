<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <p class="text-xs-center">{{ text }}</p>
      <hr />
    </div>
    <div class="wrap" v-else>
      <div class="mes" :class="{ owner }">
        <small>
          <strong>
            {{ name }}
          </strong>
        </small>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.system {
  margin-bottom: 1rem;
}
.system p {
  margin-bottom: 1rem;
}
.wrap {
  display: flex;
  flex-direction: column;
}
.mes {
  padding: 1rem;
  width: 60%;
  margin: 0 1rem;
  box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
  border-radius: 4px;
  background: #ffffff;
  color: black;
  position: relative;
  margin-bottom: 1rem;
  align-self: flex-end;
}

.mes.owner {
  align-self: flex-start;
  background: #1976d2;
  color: white;
}
.mes p {
  margin-bottom: 0;
}
</style>
