import { useCallback, useState } from "react";
import { API_CONFIG } from "@/config/api";

const endpointUrl = `${API_CONFIG.baseURL}${API_CONFIG.endpoints}`