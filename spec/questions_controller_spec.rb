require 'rails_helper'

RSpec.describe Movie, type: :model do
  
  describe 'movies by the same director' do
    before do
      @movie_with_director = Movie.create(title: 'Star Wars', director: 'George Lucas')
      @other_movie_with_same_director = Movie.create(title: 'THX-1138', director: 'George Lucas')
      @movie_with_different_director = Movie.create(title: 'Blade Runner', director: 'Ridley Scott')
      @movie_without_director = Movie.create(title: 'Inception')
    end

    context 'when there are movies by the same director' do
      it 'returns correct matches' do
        expect(@movie_with_director.others_by_same_director).to include(@other_movie_with_same_director)
        expect(@movie_with_director.others_by_same_director).not_to include(@movie_with_director)
      end

      it 'does not return movies by different directors' do
        expect(@movie_with_director.others_by_same_director).not_to include(@movie_with_different_director)
      end
    end

    context 'when no other movies exist by the same director' do
      it 'returns an empty array' do
        expect(@movie_with_different_director.others_by_same_director).to be_empty
      end
    end
  end
end
