class Babyname < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites

    scope :sort_rank, lambda {order("rank asc")}

    def self.name_search(query)
        where(first_name: query)
    end
        
    def self.search_by(gender,ethnicity,limit)
        where(gender:gender).where(ethnicity:ethnicity).limit(limit)
    end
end
