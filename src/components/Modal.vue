<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
            <p>{{k.name}}</p>
    
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
         <p>{{ k.desc }}</p>
           <p>{{ k.price }}</p>
     
        </slot>
       </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    
    name: 'Modal',
 props:['k'],
   
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #f3e4e1;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 245px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #000000;
    justify-content: space-between;
    font-family: "PT Serif";
    font-size: 20px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
    font-family:"Work Sans";
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    font-family:"Work Sans";
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: orange;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #000000;
    border: 1px solid #000000;
    border-radius: 2px;
  }
</style>