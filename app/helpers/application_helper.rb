# frozen_string_literal: true

module ApplicationHelper
  def active_sidebar(**options)
    'active' if maching_controller_action?(options)
  end

  private

  def maching_controller_action?(**options)
    params[:controller] == options[:controller] &&
      params[:action] == options[:action]
  end
end
