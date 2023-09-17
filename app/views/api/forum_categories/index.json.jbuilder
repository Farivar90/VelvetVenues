@categories.each do |category|
    json.set! category.id do
      json.extract! category, :id, :name, :description, :created_at, :updated_at
    end
  end
  