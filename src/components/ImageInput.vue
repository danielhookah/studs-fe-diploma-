<template>
  <div>
    <div class="wrap-img-input mb-3 mt-4" @click="showModal">
      <div v-if="imgPath === 'none'" class="image-placeholder">
        <b-icon icon="card-image" font-scale="3"/>
      </div>
      <img v-else :src="imgPath" alt="img">
      <!--      <img :src="image" alt="img">-->
    </div>
    <b-row>
      <!--      <b-col v-if="imageMultiple">-->
      <!--        <b-btn variant="delete" v-if="!hideImage" class="custom" block @click="$parent.removeImage(imageId)">Usuń-->
      <!--        </b-btn>-->
      <!--      </b-col>-->
      <!--      <b-col>-->
      <!--        <b-btn variant="primary" v-if="!hideImage" class="custom" block @click="showModal">Change</b-btn>-->
      <!--      </b-col>-->
    </b-row>

    <b-modal ref="advancedCropperModal" hide-footer size="xl"
             no-close-on-backdrop>
      <cropper ref="cropper"
               classname="cropper"
               :src="imgPath"
      />

      <div class="modal-footer pr-0">
        <b-button variant="primary" class="mr-3" @click="crop">
          Save
        </b-button>
        <b-button variant="primary" @click="$refs.file.click()">
          Select new image
        </b-button>
      </div>

      <input class="d-none" type="file" ref="file" @change="uploadImage($event)" accept="image/*">
    </b-modal>
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
// import ToastMixin from '@/mixins/toast-mixin'

export default {
  name: 'ImageInputAdvanced',
  // mixins: [ToastMixin],
  props: {
    minAspectRatio: {
      type: String,
      default: '2/1',
      required: false
    },
    maxAspectRatio: {
      type: String,
      default: '6/2',
      required: false
    },
    minHeight: {
      type: Number,
      default: 100,
      required: false
    },
    minWidth: {
      type: Number,
      default: 100,
      required: false
    },
    maxWidth: {
      type: Number,
      default: 3000,
      required: false
    },
    maxHeight: {
      type: Number,
      default: 3000,
      required: false
    },
    hideImage: {
      type: Boolean,
      default: false,
      required: false
    },
    // ???
    imgPath: {
      type: String,
      default: 'none',
      required: false
    }
  },
  // props: [
  //   'imageMultiple', 'imageId'
  // ],
  components: { Cropper },
  data () {
    return {
      image: ''
    }
  },
  methods: {
    showModal () {
      this.$refs.advancedCropperModal.show()
    },
    pixelsRestriction (minWidth, minHeight, maxWidth, maxHeight, imageWidth, imageHeight) {
      return {
        minWidth: minWidth,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight
      }
    },
    uploadImage (event) {
      // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          // todo by emit to parent
          this.imgPath = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    },
    crop () {
      const { coordinates, canvas } = this.$refs.cropper.getResult()
      this.coordinates = coordinates
      // You able to do different manipulations at a canvas
      // but there we just get a cropped image
      this.imgPath = canvas.toDataURL()

      // if (this.imageMultiple) {
      //   console.log(this.imageId)
      //   this.$emit('afterCropImage', { image: this.image, id: this.imageId })
      //   this.$refs.advancedCropperModal.hide()
      // } else {
      this.$emit('afterCropImage', this.image)
      this.$refs.advancedCropperModal.hide()
      // }
    }
  },
  created () {
    console.log(this.imgPath)
    if (this.imgPath) {
      this.image = this.imgPath
    } else {
      this.image = ''
      // this.image = 'https://placeimg.com/200/200/any'
    }
  }
}
</script>

<style scoped lang="scss">
  .cropper {
    height: 40vh;
    background: #DDD;
  }

  .upload-example-cropper {
    border: solid 1px #EEE;
    height: 300px;
    width: 100%;
  }

  .wrap-img-input {
    .image-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 130px;
      border-radius: 10px;
      background-color: $white-color;
      border: 2px solid $secondary-color;
    }

    img {
      border-radius: 10px;
      width: 100%;
    }
  }
</style>
