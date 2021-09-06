<template>
    <v-list-item :key="offer.id">
        <v-list-item-avatar>
            <v-img :src="offer.photo" />
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-text="offer.name"></v-list-item-title>
            <v-list-item-subtitle
                    class="text--primary"
                    v-text="price"
            />
        </v-list-item-content>

        <v-list-item-action>
            <v-dialog
                    v-model="editing"
                    persistent
                    max-width="600px"
            >
                <template #activator="{ on, attrs }">
                    <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-lead-pencil</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title>
                        <span class="text-h5">Цена</span>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field
                                v-model="offer.price[0]"
                                label="Введите значение"
                        />
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer />

                        <v-btn
                                color="blue darken-1"
                                text
                                @click="editing = false"
                        >
                            Закрыть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-list-item-action>

        <v-list-item-action>
            <v-btn icon @click="$emit('remove')">
                <v-icon>mdi-trash-can</v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
  name: 'OfferInCart',

  props: {
    offer: {
      type: Object,
      required: true,
    },
  },

  data () {
    return {
      editing: false,
    }
  },

  computed: {
    price () {
      const [amount, sign] = this.offer.price

      return `${amount} ${sign}`
    },
  },
}
</script>
