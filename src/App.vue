<template>
    <v-app>
        <v-container>
            <h1 class="text-h3 mb-3">Заказ</h1>

            <h3 class="text-h5 mb-3">Товары</h3>

            <OfferPicker v-model="offers">
                <template #activator="{ on, attrs }">
                    <v-btn
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                    >
                        Выбрать
                    </v-btn>
                </template>
            </OfferPicker>

            <v-list two-line>
                <template v-for="offer in offers">
                    <OfferInCart
                            :key="offer.id"
                            :offer="offer"
                            @remove="removeOffer(offer)"
                    />
                </template>
            </v-list>
        </v-container>
    </v-app>
</template>

<script>
import OfferInCart from '@/components/OfferInCart'
import OfferPicker from '@/components/OfferPicker'

export default {
  name: 'App',

  components: {
    OfferInCart,
    OfferPicker,
  },

  data () {
    return {
      offers: [],
    }
  },

  methods: {
    removeOffer (offer) {
      const index = this.offers.findIndex(o => o.id === offer.id)

      if (index !== -1) {
        this.offers.splice(index, 1)
      }
    },
  },
}
</script>
