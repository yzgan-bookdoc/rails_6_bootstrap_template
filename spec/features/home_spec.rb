# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Homes', type: :feature do
  it 'visits home page' do
    visit root_path

    expect(page).to have_text('Creative Tim')
  end
end
