// /tests/unit/RecipesPage.js

import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import RecipesPage from '@/components/recipes/RecipesPage.vue'

describe('RecipesPage.vue', () => {

    let recipe = {
        slug: 'strawberry-muffins',
        name: 'Strawberry Muffins',
        summary:
            'Nothing\'s better than a fresh baked muffin, except a freshly baked muffin that is actually healthy for you!',
        ingredients: ['flour', 'strawberries']
    }

    it('shows all the recipes', () => {

        const wrapper = mount(RecipesPage, {
            computed: {
                recipes: function () {
                    return [recipe]
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.text()).to.include('Recipes');
        expect(wrapper.text()).to.include('Strawberry Muffins');
    })
})