export function filterData(searchText, restaurantList) {
    return restaurantList.filter((item) => item?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  }