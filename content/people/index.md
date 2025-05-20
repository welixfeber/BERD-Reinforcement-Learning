+++
title = "People"
weight = 5
extra.full_hero = false
extra.main_nav = false
#extra.hide_title= true
extra.sub_nav =["Team","Topic Partner"]
+++

{% block_1c(title="Team" bg="accent" style="margin-top: 0px; margin-bottom: 0px;") %} 
The Core Scientific Team of TAPP comprises leading researchers and scholars specializing in AI, digital privacy, data analysis, and survey methodology. 
{% end %}

{{ anchor(title="Team")}}
{{
  gallery_person(
    data_path="people/members.toml"
    image_path="people/"
  )
}}
{{ anchor(title="Topic Partner")}}
{% block_1c(title="Topic Partner" bg="accent") %}

Topic Partners are esteemed experts in AI and digital privacy who serve on a one-year term, actively participating in the selection of topics and questions posed to the TAPP Panel. Their invaluable contributions ensure that our surveys remain relevant and impactful, reflecting the latest trends and concerns in the field.

{% end %}
