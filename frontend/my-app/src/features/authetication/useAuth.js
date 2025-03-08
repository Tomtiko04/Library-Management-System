import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";
import { register as registerApi } from "../../services/apiAuth";

export function useLogin() {
	const queryClient = useQueryClient();

	const { mutate: login, isPending: isLogin } = useMutation({
		mutationFn: loginApi,
		onSuccess: (data) => {
			queryClient.setQueryData(["user"], data.user);
			toast.success("User logged in successfully!");
		},
		onError: (err) => {
			toast.error(err.message);
		},
		retry: false,
	});

	return { login, isLogin };
}

export function useRegister() {
	const queryClient = useQueryClient();

	const { mutate: register, isPending: isRegistering } = useMutation({
		mutationFn: registerApi,
		onSuccess: (data) => {
			queryClient.setQueryData(["user"], data.user);
			toast.success("User registered successfully!");
		},
		onError: (err) => {
			toast.error(err.message);
		},
		retry: false,
	});

	return { register, isRegistering };
}