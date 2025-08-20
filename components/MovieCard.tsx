import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React, { memo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MovieCardProps extends Movie {
  onPress?: () => void;
}

const MovieCard = memo(({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  onPress,
}: MovieCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const rating = Math.round(vote_average * 10) / 10;
  const year = release_date?.split("-")[0] || "N/A";
  
  const imageUri = poster_path && !imageError
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/600x400/1a1a1a/ffffff?text=No+Image";

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "text-green-400";
    if (rating >= 6) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity 
        className={`w-[30%] mb-4 ${isPressed ? 'opacity-80' : ''}`}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        accessibilityLabel={`${title}, rated ${rating} out of 10, released in ${year}`}
        accessibilityRole="button"
        accessibilityHint="Tap to view movie details"
        style={[
          styles.cardContainer,
          isPressed && styles.pressedCard
        ]}
        activeOpacity={0.9}
      >
        {/* Movie Poster Container */}
        <View className="relative">
          <Image
            source={{ uri: imageUri }}
            className="w-full h-52 rounded-xl"
            resizeMode="cover"
            onError={() => setImageError(true)}
            style={styles.posterImage}
          />
          
          {/* Rating Badge */}
          <View className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full flex-row items-center gap-1">
            <Image 
              source={icons.star} 
              className="size-3" 
              style={{ tintColor: "#FFD700" }}
            />
            <Text className={`text-xs font-bold ${getRatingColor(rating)}`}>
              {rating}
            </Text>
          </View>

          {/* Gradient Overlay at Bottom - Using opacity instead of gradient */}
          <View 
            className="absolute bottom-0 left-0 right-0 h-16 rounded-b-xl"
            style={styles.gradientOverlay}
          />
        </View>

        {/* Movie Info Container */}
        <View className="mt-3 px-1">
          {/* Title */}
          <Text 
            className="text-white text-sm font-bold leading-5 mb-1" 
            numberOfLines={2}
          >
            {title}
          </Text>

          {/* Year and Type Row */}
          <View className="flex-row items-center justify-between mt-1">
            <View className="flex-row items-center gap-1">
              <View className="w-1 h-1 bg-accent rounded-full" />
              <Text className="text-light-300 text-xs font-medium">
                {year}
              </Text>
            </View>
            
            <Text className="text-light-300 text-xs font-medium opacity-60 uppercase tracking-wider">
              Movie
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8, // Android shadow
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  pressedCard: {
    transform: [{ scale: 0.95 }],
  },
  posterImage: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  gradientOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // Using a solid color with opacity instead of gradient for React Native compatibility
  },
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;
