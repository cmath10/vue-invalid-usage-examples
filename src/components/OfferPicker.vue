<template>
    <v-dialog
        v-model="opened"
        persistent
        max-width="600px"
    >
        <template #activator="{ on, attrs }">
            <slot name="activator" :on="on" :attrs="attrs" />
        </template>

        <v-card>
            <v-card-title>
                <span class="text-h5">Товары</span>
            </v-card-title>

            <v-card-text class="pa-0">
                <v-list two-line>
                    <v-list-item-group
                            v-model="selection"
                            active-class="indigo--text"
                            multiple
                    >
                        <template v-for="(product, index) in products">
                            <template v-for="offer in product.offers">
                                <v-list-item
                                        :key="offer.id"
                                        :value="offer.id"
                                >
                                    <v-list-item-avatar>
                                        <v-img :src="offer.photo" />
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="offer.name"></v-list-item-title>
                                        <v-list-item-subtitle
                                                class="text--primary"
                                                v-text="offer.price[0] + ' ' + offer.price[1]"
                                        />
                                    </v-list-item-content>
                                </v-list-item>
                            </template>

                            <v-divider
                                v-if="index < products.length - 1"
                                :key="index"
                            />
                        </template>
                    </v-list-item-group>
                </v-list>
            </v-card-text>

            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="blue darken-1"
                    text
                    @click="opened = false"
                >
                    Закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { same } from '@/utils/json'
import fetchProducts from '@/api/fetchProducts'

export default {
  name: 'OfferPicker',

  model: {
    prop: 'offers',
    event: 'offer-picker:change',
  },

  props: {
    offers: {
      type: Array,
      required: true,
    }
  },

  data () {
    return {
      selection: [],
      products: [],
      opened: false,
    }
  },

  computed: {
    availableOffers () {
      return this.products.reduce((offers, p) => [...offers, ...p.offers], [])
    },
  },

  watch: {
    offers () {
      const prev = this.selection
      const curr = this.offers.map(offer => offer.id)

      if (!same(prev, curr)) {
        this.selection = curr
      }
    },

    // warn: Передача объектов по ссылке
    selection () {
      const find = id => this.availableOffers.find(o => o.id === id)
      const exists = v => v !== undefined

      this.$emit('offer-picker:change', this.selection.reduce((offers, id) => [
        ...offers,
        find(id),
      ], []).filter(exists))
    },
  },

  created () {
    fetchProducts().then(products => {
      this.products = products
    })
  },
}
</script>
