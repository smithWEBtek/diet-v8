class QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :edit, :destroy]

    def new_dropdown_quote
      @dropdown_quote = Quote.new
      render 'quotes/new_dropdown_quote', layout: false
    end

    def one_random_quote
      @quote = Quote.build_random_quotes(1)[0]
      @quote_sentence = @quote.build_quote
      respond_to do |format|
        format.html { render 'quotes/show', layout: false }
        format.json { render json: @quote }
      end
    end

    def random_quotes
      @quotes = Quote.build_random_quotes
      @quote_sentences = []
      @quotes.each do |quote|
        @quote_sentences.push(quote.build_quote)
      end
      @quote_sentences
      respond_to do |format|
        format.html { render 'quotes/index', layout: false }
        format.json { render json: @quote_sentences }
      end
    end

    def clear_quotes
      Quote.destroy_all
      ActiveRecord::Base.connection.reset_pk_sequence!('quotes')
      redirect_to root_path
    end

    def export_quotes_csv
      @quotes = Quote.all
      render '/quotes/index.csv.erb'
    end

    def new
      @quote = Quote.new
      render layout: false
    end

    def index
      @quotes = Quote.all
      @random_quotes = ""
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @quotes }
        format.csv
      end
    end

    def show
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @quote }
      end
    end

    def create
      @quote = Quote.build_quote_params(params)
      if @quote.save
        @quote_sentence = @quote.build_quote
      respond_to do |format|
        format.html { render :show, layout: false }
        format.json { render json: @quote }
        end
      else
      redirect_to root_path
      end
    end

    def edit
    end

    def update
      @quote = Quote.find_by_id(params[:id])
      @quote.update(quote_params)
      if @quote.save
        flash[:notice] = "Quote updated."
        redirect_to root_path
      else
        redirect_to new_quote_path
      end
    end

    def destroy
      if @quote.delete
        flash[:notice] = "Quote deleted"
        redirect_to quotes_path
      else
        flash[:notice] = @quote.errors.full_messages
        redirect_to quote_path(@quote)
      end
    end

    private
      def set_quote
        @quote = Quote.find_by_id(params[:id])
      end

      def quote_params
        params.require(:quote).permit(:celeb_id, :verb_id, :adj_id, :food_id, :diet_id, :phrase_id, new_phrase_attributes: [:new_phrase])
      end
  end
