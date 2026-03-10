//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Internal Imports 
import { axiosReq } from "../api/axiosDefault";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ jwtDecode Imports 
import jwtDecode from "jwt-decode";


/**This function helps in fetch more data from the API 
 * and is used to display data in the infinite scroll component
 */

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch(err) {
    // Handle fetch more data error silently
  }
};
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  const refreshTokenTimestamp = localStorage.getItem("refreshTokenTimestamp");
  if (!refreshTokenTimestamp) {
    return false;
  }

  const timestamp = Number(refreshTokenTimestamp);
  if (Number.isNaN(timestamp)) {
    return false;
  }

  // JWT exp timestamps are in seconds.
  return timestamp > Date.now() / 1000;
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};

export const logAuthIssue = (scope, err) => {
  const status = err?.response?.status;
  const url = err?.config?.url || "unknown-url";
  const issueKey = `authIssue:${scope}:${status || "unknown"}:${url}`;

  // In development, always log to speed up debugging.
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn(`[auth] ${scope}`, { status, url, message: err?.message });
    return;
  }

  // In production, log each issue shape once per tab session.
  if (sessionStorage.getItem(issueKey)) {
    return;
  }

  sessionStorage.setItem(issueKey, "1");
  // eslint-disable-next-line no-console
  console.warn(`[auth] ${scope}`, { status, url });
};