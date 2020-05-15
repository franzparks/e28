<template>
    <div>
        <h2>Add a Recipe</h2>

        <label for='name'>Name</label>
        <input 
            type='text'
            data-test='recipe-name-input'
            v-model='$v.recipe.name.$model'
            :class='{ "form-input-error": $v.recipe.name.$error }'
             id='name'
         />
         <div v-if='$v.recipe.name.$error'>
            <div class='form-feedback-error' v-if='!$v.recipe.name.required'>Name is required.</div>
        </div>

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='recipe.slug' id='slug' />

        <label for='description'>Description</label>
        <textarea v-model='recipe.description' id='description'></textarea>

        <input type='submit' value='Add' @click.prevent='addRecipe' />

        <div class='form-feedback-error' v-if='$v.$anyError'>Please correct the above errors</div>

        <transition name='fade'>
            data-test='recipe-added-confirmation'
            <div class='alert' v-if='added'>Your recipe was added!</div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    data: function() {
        return {
            added: false,
            recipe: {
                name: '',
                slug: '',
                summary: '',
                ingredients: []
            }
        };
    },
    validations: {
        recipe: {
            name: {
                required
            },
            slug: {
                required,
                minLength: minLength(4),
                doesNotExist(value) {
                    return !this.$store.getters.getRecipeBySlug(value);
                }
            }
        }
    },
    methods: {
        addRecipe: function() {
            // Invoke this touch method to force the validation system to register errors even if the user hasn't interacted with any of the fields yet.
            this.$v.$touch();
            // Only add the recipe if we don't have any errors
            if (this.$v.$anyError == false) {
                app.api.add('recipes', this.recipe).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
                        // Because we're not redirecting the user after adding a product, we should reset the validation so they can add a new product
                        this.$v.$reset();

                        this.added = true;

                        setTimeout(() => (this.added = false), 3000);

                        this.recipe = {
                            name: '',
                            slug: '',
                            summary: '',
                            ingredients: []
                        };
                    }
                });
            }
        }
    }
};
</script>

<style scoped>
input {
    font-size: 15pt;
}

textarea,
input[type='text'] {
    width: 50%;
}

textarea {
    height: 75px;
    display: block;
    margin: auto;
}

label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}

input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>