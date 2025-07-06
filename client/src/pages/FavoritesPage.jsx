import React from "react"
import { useEffect, useState } from "react"
import { NavigationRow } from "../components/NavigationRow"
import { favoriteContentStore } from "../stores/favoritesContentStore"
import { ProductCard } from "../components/ProductCard"
import { supabase } from "../supabase"

export const FavoritesPage = () => {
  const favorites = favoriteContentStore((state) => state.favorites)
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      if (favorites.length === 0) {
        setFavoriteProducts([])
        return
      }

      setLoading(true)
      setError(null)

      try {
        const { data, error } = await supabase
          .from("plants")
          .select("*")
          .in("id", favorites)

        if (error) {
          setError(error.message)
          setFavoriteProducts([])
        } else {
          setFavoriteProducts(data)
        }
      } catch (fetchError) {
        console.error(fetchError)
        setError("Something went wrong, couldn't load favorites")
        setFavoriteProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchFavoriteProducts()
  }, [favorites])

  return (
    <>
      <NavigationRow links={[{ text: "My Favorites", to: "/favorites" }]} />

      <div
        className="
        mt-[68px]
        mx-auto
        lg:mx-[100px]"
      >
        <h2
          className="
          text-[28px] 
          md:text-[40px] 
          font-semibold 
          mb-[60px]"
        >
          My Favorites
        </h2>

        {loading && <p>Loading favorites...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && favoriteProducts.length === 0 && (
          <p className="mt-[80px] mb-[120px]">
            You don't have any favorites yet 💚🌱
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[40px] max-w-[1260px] mx-auto px-[30px] md:px-0">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
