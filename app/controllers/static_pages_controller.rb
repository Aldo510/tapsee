class StaticPagesController < ApplicationController
  def index
  end
  def voz
    #redirect_to '/voz'
  end
  def video
    #render 'video'
  end
  def new_video
    #guardar el parametro del objeto
    video = params[:video][:palabra]
    uri = URI('http://transmors.hol.es/vid.php?')
    params = { :tex => "#{video}" }
    uri.query = URI.encode_www_form(params)

    res = Net::HTTP.get_response(uri)
    render plain: "#{res.body}"
    #guargar en una variable lo que regrese
    # resp = Unirest.get('http://transmors.hol.es/vid.php?', parameters: {:tex => "#{video}"})
    #Mandar a la vista lo que regreso y ponerlo en el body
    #con ajax se agregara a una parte de la vista
    # render plain: "#{resp.body}"
  end
  def morse
  end
  def new_morse
    word = params[:morse][:palabra]
    #guargar en una variable lo que regrese
    resp = Unirest.get('http://transmors.hol.es/mor.php?', parameters: {:tex => "#{word}"})
    #Mandar a la vista lo que regreso y ponerlo en el body
    #con ajax se agregara a una parte de la vista
    render plain: "#{resp.body}"
  end
  #Renderear el formulario
  def word
    #redirect_to '/word'
  end
  #Metodo para jalar lo que regrese el web service
  def new_word
    #guardar el parametro del objeto
    word = params[:word][:palabra]
    #guargar en una variable lo que regrese
    resp = Unirest.get('http://transmors.hol.es/new.php?', parameters: {:tex => "#{word}"})
    #Mandar a la vista lo que regreso y ponerlo en el body
    #con ajax se agregara a una parte de la vista
    render plain: "#{resp.body}"
  end
end
