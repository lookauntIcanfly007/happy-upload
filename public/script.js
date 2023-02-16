const fetchData = async () => {
  const apiUrlFromLs = localStorage.getItem("apiUrl");
  if (apiUrlFromLs) {
    const response = await fetch(`${apiUrlFromLs}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();
